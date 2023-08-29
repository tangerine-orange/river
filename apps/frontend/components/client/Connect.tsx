import { ConnectKitButton } from 'connectkit';
import { BodySmall } from '@river/design-system';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
  Flex,
} from '@river/design-system';
import { useDisconnect } from 'wagmi';
import { shortenAddress } from '../../utils/shortenAddress';
import { Hex } from 'viem';

function AuthDropdown({
  ensName,
  address,
  disconnect,
}: {
  ensName?: string;
  address?: Hex;
  disconnect: () => void;
}) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className='focus:outline-none'>
        <BodySmall className='text-onyx'>
          {ensName ? ensName : shortenAddress(address)}
        </BodySmall>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='bg-white border border-philippine-gray rounded px-8 py-5 mr-3 mt-3'>
        <Flex className='flex-col gap-y-5 items-center'>
          <DropdownMenuItem className='focus:outline-none'>
            <BodySmall className='text-onyx'>
              <button
                className='hover:underline cursor-pointer'
                type='button'
                onClick={() => disconnect()}
              >
                Disconnect
              </button>
            </BodySmall>
          </DropdownMenuItem>
          <DropdownMenuItem className='focus:outline-none'>
            <BodySmall className='text-silver-sand cursor-not-allowed'>
              About River
            </BodySmall>
          </DropdownMenuItem>
        </Flex>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Connect() {
  const { disconnect } = useDisconnect();
  return (
    <ConnectKitButton.Custom>
      {({ isConnected, show, address, ensName }) => {
        return isConnected ? (
          <div className='p-2 font-medium rounded justify-center items-center flex hover:bg-bright-gray'>
            <AuthDropdown
              ensName={ensName}
              address={address}
              disconnect={disconnect}
            />
          </div>
        ) : (
          <button
            type='button'
            className='p-2 font-medium rounded justify-center items-center flex hover:bg-bright-gray'
            onClick={show}
          >
            <BodySmall className='text-onyx'>Connect</BodySmall>
          </button>
        );
      }}
    </ConnectKitButton.Custom>
  );
}
