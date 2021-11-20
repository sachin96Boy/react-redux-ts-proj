import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
// import { useDispatch } from "react-redux";
// import { actionCreators } from "../state";

import { useActions } from "../hooks/useActions";

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState<string>("");
  // const dispatch = useDispatch();
  const { SearchRepositories } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.searchReducer
  );

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // dispatch(actionCreators.SearchRepositories(term));
    SearchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={term}
          onChange={(e) => setTerm(e.target.value)}
          type="text"
        />
        <button type="submit">Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data.map((name) => <div key={name}>{name}</div>)}
    </div>
  );
};

export default RepositoriesList;
