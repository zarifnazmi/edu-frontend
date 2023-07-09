import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { IState } from '../../../store/rootReducer';
import { ApiStatus } from '../../../types/ApiStatus';
import { IFeedbackItem, ISuggestionItem } from '../../../types/IReviewItem';
import { loadSuggestions, addFeedback } from '../reviewAction';
import EmojiDropdownPopup from '../../../components/EmojiDropdownPopup';
import { useLocation } from 'react-router-dom';
import Loader from '../../../components/Loader';
import ErrorAlert from '../../../components/ErrorAlert';

interface IPopupStateProps {
    suggestions: ISuggestionItem[];
    loadingStatus: ApiStatus;
    feedback: IFeedbackItem;
    addingStatus: ApiStatus;
}

interface LocationState {
    email: string;
}

interface IPopupDispatchProps {
    loadSuggestions: () => void;
    addFeedback: (feedback: IFeedbackItem) => void;
}

const ReviewPopup = ({ suggestions, addingStatus, loadingStatus, loadSuggestions, addFeedback }: IPopupStateProps & IPopupDispatchProps) => {
    const location = useLocation();
    const values = location.state as LocationState;
    const [visible, setVisible] = useState(false);

    const handleCancel = () => setVisible(false);

    useEffect(() => {
        setTimeout(() => {
            loadSuggestions();
            setVisible(true);
        }, 3000);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div>
            {loadingStatus === ApiStatus.LOADED && <EmojiDropdownPopup data={suggestions} popup_state={visible} extra_text='Can you tell us why?' popup_title='How was you class today?' popup_desc='Your honest answer will help to improve your class in the future' handleCancel={handleCancel} onClick={addFeedback} email={values.email}  />}
            {loadingStatus === ApiStatus.LOADING || visible === false ? <Loader /> : null}
            {addingStatus === ApiStatus.FAILED ? <ErrorAlert message="Email is invalid" /> : null}
        </div>
    );
};

function mapStateToProps(state: IState): IPopupStateProps {
    return {
        suggestions: state.review.suggestions,
        loadingStatus: state.review.loadingStatus,
        addingStatus: state.review.addingStatus,
        feedback: state.review.feedback
    }
}

const mapDispatchToProps: IPopupDispatchProps = {
    loadSuggestions,
    addFeedback
}

export const ReviewPopupContainer = connect(mapStateToProps, mapDispatchToProps)(ReviewPopup);