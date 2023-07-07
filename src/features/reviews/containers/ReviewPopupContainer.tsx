import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../../store/rootReducer';
import { ApiStatus } from '../../../types/ApiStatus';
import { IFeedbackItem, ISuggestionItem } from '../../../types/IReviewItem';
import { loadSuggestions, addFeedback } from '../reviewAction';
import EmojiDropdownPopup from '../../../components/EmojiDropdownPopup';
import { MenuProps } from 'antd';
import { useParams } from 'react-router-dom';

interface IPopupStateProps {
    suggestions: ISuggestionItem;
    loadingStatus: ApiStatus;
    feedback: IFeedbackItem;
}

interface IDataItem {
    emoji: string;
    title: string;
    suggestions: MenuProps['items'];
}

interface IPopupDispatchProps {
    loadSuggestions: () => void;
    addFeedback: (feedback: IFeedbackItem) => void;
}

const ReviewPopup = ({ suggestions, feedback, loadingStatus, loadSuggestions, addFeedback }: IPopupStateProps & IPopupDispatchProps) => {
    const { email } = useParams<{ email: string }>();
    const [visible, setVisible] = useState(false);
    const emojiTerrible = '🙁';
    const emojiOkay = '😕';
    const emojiAwesome = '🤩';
    const [data, setData] = useState<IDataItem[]>([
        {
            emoji: emojiTerrible,
            title: 'Terrible...',
            suggestions: []
          },
          {
            emoji: emojiOkay,
            title: 'Okay.',
            suggestions: []
          },
          {
            emoji: emojiAwesome,
            title: 'Awesome!',
            suggestions: []
          }
    ]);


    useEffect(() => {
        loadSuggestions();
        let tempData = [...data];
        let okayIndex = tempData.findIndex((e) => e.title === 'Okay.');
        let awesomeIndex = tempData.findIndex((e) => e.title === 'Awesome!');
        
        for(let i = 0; i < suggestions.okaySuggestions.length; i++) {
            tempData[okayIndex]?.suggestions?.push({
                label: suggestions.okaySuggestions[i],
                key: i.toString()
            })
        }
        for(let i = 0; i < suggestions.awesomeSuggestions.length; i++) {
            tempData[awesomeIndex]?.suggestions?.push({
                label: suggestions.awesomeSuggestions[i],
                key: i.toString(),
            })
        }
        // console.log(tempData);
        setData(tempData);
        setTimeout(() => {
            setVisible(true);
        }, 3000);
    }, []);

    return (
        <div>
    {loadingStatus === ApiStatus.LOADED && <EmojiDropdownPopup data={data} popup_state={visible} extra_text='Can you tell us why?' popup_title='How was you class today?' popup_desc='Your honest answer will help to improve your class in the future'  />}
    {/* {loadingStatus === ApiStatus.LOADING ? <Loader /> : null} */}
    {/* {loadingStatus === ApiStatus.LOADED && places.length > 0 && !places.some(item => item.description === input) ? <ListItem places={places} onSelect={loadPlaces} saveToMarker={retrievePlace} /> : null}
    {loadingStatus === ApiStatus.LOADED && places.length === 0 && input.length > 0 ? <SearchStatus status="No places found" /> : null}
    {loadingStatus === ApiStatus.FAILED ? <SearchStatus status="Failed to search places" />  : null} */}
    </div>
    );
};

function mapStateToProps(state: IState): IPopupStateProps {
    return {
        suggestions: state.review.suggestions,
        loadingStatus: state.review.loadingStatus,
        feedback: state.review.feedback
    }
}

const mapDispatchToProps: IPopupDispatchProps = {
    loadSuggestions,
    addFeedback
}

export const ReviewPopupContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewPopup);