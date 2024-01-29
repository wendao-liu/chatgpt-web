import { IconButton } from '@chakra-ui/react';
import Person from '@mui/icons-material/Person';
import { IconMenu2, IconSettings } from '@tabler/icons-react';

import { visibleStore } from './store';

export function Header() {
  return (
    <div
      className="min-h-16 w-full flex flex-row items-center justify-between border-b px-4"
      style={{ backgroundColor: 'var(--chakra-colors-chakra-body-bg)' }}
    >
      <div className="flex items-center font-medium space-x-2">
        <Person></Person>
        <IconButton
          aria-label="ChatList"
          variant="ghost"
          icon={<IconMenu2 stroke={1.5} />}
          onClick={() => {
            visibleStore.setState((state) => ({ chatVisible: !state.chatVisible }));
          }}
        />
      </div>

      <div className="flex flex-row items-center space-x-1">
        <IconButton
          aria-label="Settings"
          variant="ghost"
          icon={<IconSettings stroke={1.5} />}
          onClick={() => visibleStore.setState({ settingVisible: true })}
        />
      </div>
    </div>
  );
}
