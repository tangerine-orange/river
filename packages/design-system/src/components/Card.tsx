import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import { cn } from '../utils';

const cardVariants = cva(
  'aspect-square overflow-hidden object-cover outline outline-[0.5px] outline-base-border',
  {
    variants: {
      size: {
        default: 'min-h-[224px] min-w-[224px] rounded',
        sm: 'min-h-[160px] min-w-[160px] rounded',
        lg: 'min-h-[248px] min-w-[248px] rounded-[7px]',
        icon: 'min-h-[48px] min-w-[48px] rounded-[1.5px]',
        auth: 'min-h-[40px] min-w-[40px] rounded-full',
      },
    },
    defaultVariants: {
      size: 'default',
    },
  }
);

interface CardProps
  extends React.PropsWithChildren,
    VariantProps<typeof cardVariants> {
  className?: string;
}

function Card(props: CardProps) {
  return (
    <div
      className={cn(
        cardVariants({ size: props.size ?? 'default' }),
        props.className
      )}
    >
      {props.children}
    </div>
  );
}

Card.displayName = 'Card';

export { Card, type CardProps };
