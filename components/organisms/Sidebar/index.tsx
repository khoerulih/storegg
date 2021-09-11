import Footer from './Footer';
import Profile from './Profile';
import MenuItem from './MenuItem';

interface SidebarProps {
  activeMenu: 'overview' | 'transactions' | 'settings';
}

export default function Sidebar(props: SidebarProps) {
  const { activeMenu } = props;
  return (
    <section className="sidebar">
      <div className="content pt-50 pb-30 ps-30">
        <Profile />
        <div className="menus">
          <MenuItem
            href="/member"
            icon="ic-menu-overview"
            title="Overview"
            active={activeMenu === 'overview'}
          />
          <MenuItem
            href="/member/transactions"
            icon="ic-menu-transactions"
            title="Transactions"
            active={activeMenu === 'transactions'}
          />
          <MenuItem href="/member" icon="ic-menu-messages" title="Messages" />
          <MenuItem href="/member" icon="ic-menu-card" title="Card" />
          <MenuItem href="/member" icon="ic-menu-rewards" title="Rewards" />
          <MenuItem
            href="/member/edit-profile"
            icon="ic-menu-settings"
            title="Settings"
            active={activeMenu === 'settings'}
          />
          <MenuItem href="/sign-in" icon="ic-menu-logout" title="Logout" />
        </div>
        <Footer />
      </div>
    </section>
  );
}
