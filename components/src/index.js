import React from 'react';
import ReactDom from 'react-dom';
import ApprovalCard from './ApprovalCard';
import CommentDetails from './CommentDetails';
import faker from 'faker';
const App = () => {
  return(
    <div className="ui container comments">
       <ApprovalCard>
       <CommentDetails author ="Sam" time ="Today" post="Happy" avatar={faker.image.avatar()} />
       </ApprovalCard>
       <ApprovalCard>
       <CommentDetails author ="Sam" time ="Today" post="Happy" avatar={faker.image.avatar()} />
       </ApprovalCard>
       <ApprovalCard>
       <CommentDetails author ="Sam" time ="Today" post="Happy" avatar={faker.image.avatar()} />
       </ApprovalCard>
       <ApprovalCard>
       <CommentDetails author ="Sam" time ="Today" post="Happy" avatar={faker.image.avatar()} />
       </ApprovalCard>
    </div>
  );
};

ReactDom.render(<App />, document.querySelector('#root'));