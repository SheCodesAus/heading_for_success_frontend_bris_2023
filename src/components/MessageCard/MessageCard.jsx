const MessageCard = (props) => {
    return (
        <div> 
        { props.messageType === 'header' ? (
            <h3>{props.message}</h3>
        ) : (
            <p>{props.message}</p>
        ) }


        </div>
    );
}

export default MessageCard;