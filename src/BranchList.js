import React from 'react';
import './App.css'

async function getGitBranches(props) {
  console.log('test')
  let result = [];
  let page = 1;
  let currResult;
  do {
    currResult = await fetch(`https://api.github.com/repos/${props.owner}/${props.repo}/branches?page=` + page, {
      method: 'get', headers: { Authorization: `token ${props.gt}` },
    }).then((response) => response?.json());
    page++;
    result.push(...currResult);
  } while (currResult?.length);
  console.log(result);
  return result;
};

function BranchList(props) {
  const { db } = props;
  const [branches, setBranches] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    fetchGitBranches();
  }, []);

  const fetchGitBranches = async () => {
    const branches = await getGitBranches(props.data);
    setBranches(branches);
    setIsLoading(false);
  };

  return (
    <>
      <h1>
        Branches
      </h1>
      {isLoading ?
        'Loading...'
        :
        <table id="myTable" width="100%">
          <thead>
            <tr>
              <th>Branch Name</th>
              <th>Coverage</th>
            </tr>
          </thead>
          <tbody>
            {branches.map(b => (
              <tr>
                <td>{b.name}</td>
                <td>{(db?.find(d => (d.branch === b.name))?.coverage || 0) + '%'}</td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
}

// 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
// Validate-Me
// validateme-be

export default BranchList;
