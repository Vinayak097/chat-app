


import useGetConversations from "../hooks/getConversation";
import { getRandomEmoji } from "../utils/emogis";
import Conversation from "./Conversation";

const Conversations = () => {
const { loading, conversations } = useGetConversations();

return (
    <div className='py-2 flex flex-col overflow-auto'>
        {conversations.length !== 0 ? 
            <div>
                {conversations.map((conversation, idx) => (
                    <Conversation
                        key={conversation._id || idx}
                        conversation={conversation}
                        emoji={getRandomEmoji()}
                        lastIdx={idx === conversations.length - 1}
                    />
                ))}
            </div>
            :
            <div>No conversation found</div>
        }
        {loading ? <span className='loading loading-spinner mx-auto'></span> : null}
    </div>
);

};
export default Conversations;

// STARTER CODE SNIPPET
// import Conversation from "./Conversation";

// const Conversations = () => {
// 	return (
// 		<div className='py-2 flex flex-col overflow-auto'>
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 			<Conversation />
// 		</div>
// 	);
// };
// export default Conversations;