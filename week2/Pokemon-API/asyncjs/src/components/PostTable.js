import React from 'react';

export default function PostTable(props) {
  return (
    <div>
      <table className="table mt-5">
        <thead>
          <tr>
            <th>Name</th>
          </tr>
        </thead>
        <tbody id="table-body">
          {props.posts.map((post) => {
            return (
              <tr key={post.id}> 
                <td>{post.title}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
