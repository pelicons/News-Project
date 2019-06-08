import React from 'react';

export const Error = props => {
    const { err } = props;
    if (!err) return <h2>Something went wrong...</h2>;
    return (
      <div>
        <h2 className="Error">{err.errStatus}</h2>
        <h3 className="Error-msg"> {err.errMessage}</h3>
        <br />
        <h3>Sorry for this issue!</h3>
      </div>
    );
  };
