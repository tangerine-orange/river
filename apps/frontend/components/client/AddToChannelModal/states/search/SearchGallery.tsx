import React from 'react';
import { Nft } from 'alchemy-sdk';
import Image from 'next/image';
import { cn } from '@river/design-system/src/utils';
import { Body, BodySmall } from '@river/design-system';

interface NetworkSelectProps {
  nftMetadata: Nft | undefined;
}

const SearchGallery = ({ nftMetadata }: NetworkSelectProps) => {
  return (
    <div className='w-full h-[218px] bg-base-shade border-y-[0.5px] border-base-border flex items-center'>
      {/* Grid container */}
      <div className='mx-[33px] flex justify-start items-center w-full space-x-5'>
        {/* First Column: Image or Blank Square */}
        <div className='flex justify-center w-fit'>
          {nftMetadata?.media?.[0]?.thumbnail ? (
            <Image
              src={nftMetadata?.media?.[0]?.thumbnail}
              alt={nftMetadata?.title}
              width={200}
              height={200}
              className={cn(
                'rounded w-[165px] h-[165px] object-cover aspect-square'
              )}
            />
          ) : (
            <div className='w-[165px] h-[165px] bg-base-border'></div>
          )}
        </div>
        {/* Second Column: Text details */}
        <div className='h-full flex flex-col w-[200px]'>
          <Body className='text-label break-words'>
            {nftMetadata?.title || 'Title'}
          </Body>
          {/* truncating for now but need to add ens resolution */}
          <BodySmall className='text-[13px] text-label-muted break-words truncate'>
            {nftMetadata?.contract.contractDeployer || 'Created By'}
          </BodySmall>
          <BodySmall className='text-[13px] text-label-muted break-words mt-[25.9px] '>
            {nftMetadata?.description || 'Description' || 'Description'}
          </BodySmall>
        </div>
      </div>
    </div>
  );
};

{
  /* <div className="w-full h-[220px] bg-[#E0E0E0]">
{nftMetadata ? (
  <img src={nftMetadata.media[0].thumbnail} alt={nftMetadata.title || "NFT"} />
) : (
  "yo" // Placeholder content or UI components for empty state
)}
</div> */
}

export default SearchGallery;
