import React from "react";
import Tooltip from "./Tooltip";

export const TableHead = () => {
  return (
    <thead>
      <tr>
        <th style={{ width: "5%" }}>#</th>
        <th style={{ width: "50%" }}>Repository</th>
        <th style={{ width: "15%" }}>Stars</th>
        <th style={{ width: "15%" }}>Forks</th>
        <th style={{ width: "15%" }}>Open Issues</th>
      </tr>
    </thead>
  );
};

export const TableRow = ({ index, rep }) => {
  console.log(rep);
  const { owner, stargazers_count, forks, open_issues, name } = rep;
  const { login, avatar_url } = owner;
  return (
    <tr>
      <Tooltip>
          <td style={{ width: "5%" }}>{index}</td>
          <td>
              <div className="row gap-md">
                  <img
                      width={32}
                      height={32}
                      className="avatar"
                      src={avatar_url}
                      alt={`Avatar for ${login}`}
                  />
                  <a href={`https://github.com/${login}/${name}`}>{name}</a>
              </div>
          </td>
          <td></td>
      </Tooltip>
    </tr>
  );
};

export const EmptyRow = () => {
  return (
    <tr>
      <td>No Data Found.</td>
    </tr>
  );
};

const Table = ({ repos }) => {
  return (
    <table>
      <TableHead />
      <tbody>
        {repos.map((repo, index) => {
          <TableRow index={index} rep={repo} />;
        })}
        {!repos && <EmptyRow />}
      </tbody>
    </table>
  );
};

export default Table;
