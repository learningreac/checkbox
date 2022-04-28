import React from "react";
import InputBox from './Inputbox';
import HistoryList from './HistoryList';
import GitHubUser from './fetchUserInfo';
import GithubProvider from './GithubUserProvider';


/*function GitHubUser({ login }) {
    const [mydata, setData] = useState();

    useEffect(() => {
        if (!login) return;
        fetch(`https://api.github.com/users/${login}`)
            .then(response => response.json())
            .then(setData)
            .catch(console.error);
    }, [login]);

    if (mydata)
        return <pre>{JSON.stringify(mydata, null, 2)}</pre>

    return null;
}
*/

export default function GithubUserAPP() {
   
    return (
        <GithubProvider>
            <div className='ant-page-body'>
                <InputBox />
                <HistoryList  />
                <GitHubUser />
            </div>
        </GithubProvider>
    )
}