import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { backend_url } from "../config";
import axios from 'axios'
const useGetConversations = () => {
	const [loading, setLoading] = useState(false);
	const [conversations, setConversations] = useState([]);
	
	
	useEffect(() => {
		const getConversations = async () => {
			setLoading(true);
			try {
				const res = await axios.get(`${backend_url}/api/users/get/bulk`, {
					withCredentials: true
				});
				const data = await res.json();
				console.log("res ", res)
				if (data.error) {
					throw new Error(data.error);
				}
				setConversations(data);
			} catch (error) {
				toast.error(error.message);
			} finally {
				setLoading(false);
			}
		};

		getConversations();
		
	}, []);

	return { loading, conversations };
};
export default useGetConversations;