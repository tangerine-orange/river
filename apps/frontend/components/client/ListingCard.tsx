import Image from 'next/image';
import Link from 'next/link';
import { Body, Card, BodySmall, Stack, cn } from '@river/design-system';
import { truncateText } from '../../utils';
import { Listing } from '../../gql/sdk.generated';
import { extractAddressFromListingId } from '../../utils';
import { useGetAddressDisplay } from '../../hooks/useGetAddressDisplay';
import { Hex } from 'viem';

export function ListingCard({
  listing,
  className,
}: {
  listing: Listing;
  className?: string;
}) {
  // Run useGetAddress hook on page load. Add in the display lag so that the cards dont jump 
  // in place initially before display has fetched a value. always show at least the address,
  // and correct it to the ens. This should be replaced by a server side solution
  const { display } = useGetAddressDisplay(listing?.listingTargetMetadata?.pieceCreator as Hex)
  const frontEndDisplayLagFix = display ? display : listing?.listingTargetMetadata?.pieceCreator as Hex

  return (
    <Stack className={cn('gap-y-2', className)}>
      {/* Image */}
      <Card className='relative shadow-md'>
        <Link
          href={`${extractAddressFromListingId(listing.id)}/${listing.id.slice(
            44
          )}`}
        >
          <Image
            className='object-cover aspect-square'
            src={listing?.listingTargetMetadata?.pieceThumbnail as string}
            alt={listing?.listingTargetMetadata?.pieceName as string}
            fill
          />
        </Link>
      </Card>
      {/* Caption */}
      <Stack className='max-w-[224px]'>
        <Link
          href={`${extractAddressFromListingId(listing.id)}/${listing.id.slice(
            44
          )}`}
        >
          <Body className='text-label font-medium leading-[14px] hover:underline'>
            {truncateText(
              listing?.listingTargetMetadata?.pieceName as string,
              30
            )}
          </Body>
        </Link>
        <BodySmall className='text-label-muted cursor-default'>
          {truncateText(frontEndDisplayLagFix, 30)}
        </BodySmall>
      </Stack>
    </Stack>
  );
}
