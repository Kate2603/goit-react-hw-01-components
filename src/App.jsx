import user from 'backend/user.json';
import data from 'backend/data.json';
import friends from 'backend/friends.json';
import transactions from 'backend/transactions.json';
import Profile from 'components/profile/Profile';
import Statistics from 'components/statistics/Statistics';
import FriendList from 'components/friends/FriendList';
import TransactionHistory from 'components/transactions/TransactionHistory';

export default function App() {
  return (
    <div>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
}
