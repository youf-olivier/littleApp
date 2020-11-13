import { Card, Button } from 'antd';
import { LoginOutlined } from '@ant-design/icons';

import jwtBadge from 'shared/images/logo-jwt.svg';
import userImage from 'shared/images/user.svg';

const More = ({ token }) => (
  <a href={`https://jwt.io?id_token=${token}`} className="user-token">
    <img src={jwtBadge} alt="View in JWT.io" />
  </a>
);

const UserCard = ({ user, onLogin, onLogout }) => {
  return user ? (
    <Card title="YOUR ID TOKEN" extra={<More token={user.id_token} />} className="user-card">
      <img src={user?.profile?.picture || userImage} alt="user avatar" className="user-avatar" />
      <p className="user-mail">{user.profile.email}</p>
      {onLogout && (
        <Button type="primary" shape="round" className="button-logout" size="large" onClick={onLogout}>
          Logout
        </Button>
      )}
    </Card>
  ) : (
    <Button type="primary" shape="round" icon={<LoginOutlined />} className="button-summit" size="large" onClick={onLogin}>
      Login
    </Button>
  );
};

export default UserCard;
