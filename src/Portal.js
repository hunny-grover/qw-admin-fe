import React from 'react'
import BranchList from './BranchList';

export default function Portal() {
    const [data, setData] = React.useState();
    const [db, setDb] = React.useState();

    React.useEffect(() => {
        init();
        fetchDb();
    }, [])

    const init = () => {
        setData({
            gt: localStorage.getItem("gt"),
            owner: localStorage.getItem("owner"),
            repo: localStorage.getItem("repo"),
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        localStorage.setItem("gt", formData.get('token'));
        localStorage.setItem("owner", formData.get('owner'));
        localStorage.setItem("repo", formData.get('repo'));
        init();
    }

    const fetchDb = async () => {
        const fetchedDb = await fetch('http://localhost:4000/coverage', {
            method: 'get', cors: 'no-cors'
        }).then((response) => response?.json());
        setDb(fetchedDb);
    }

    return (
        <>
            {(data?.gt && data?.owner && data?.repo) ?
                <BranchList {...{ data, db }} />
                :
                <form onSubmit={handleSubmit}>
                    <label htmlFor="token">Git token:</label><br />
                    <input type="text" name="token" /><br /><br />

                    <label htmlFor="owner">Owner</label><br />
                    <input type="text" name="owner" /><br /><br />

                    <label htmlFor="repo">Repo</label><br />
                    <input type="text" name="repo" /><br /><br />
                    <input type="submit" value="Submit" />
                </form>
            }
        </>
    )
}
