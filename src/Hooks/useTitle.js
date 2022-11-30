import { useEffect } from "react";

const useTitle = title => {
	useEffect(() => {
		document.title = `${title} || Ikea furniture`;
	}, [title]);
};
export default useTitle;
