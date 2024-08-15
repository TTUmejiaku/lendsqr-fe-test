import * as SelectPrimitives from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon } from "@radix-ui/react-icons";
import { forwardRef } from "react";
import classNames from "classnames";

const Select = SelectPrimitives.Root;

const SelectGroup = SelectPrimitives.Group;

const SelectValue = SelectPrimitives.Value;

const SelectItem = forwardRef<
  React.ElementRef<typeof SelectPrimitives.Item>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Item>
>(({ children, className, ...props }, forwardedRef) => {
  return (
    <SelectPrimitives.Item
      className={classNames("SelectItem", className)}
      {...props}
      ref={forwardedRef}
    >
      <SelectPrimitives.ItemText>{children}</SelectPrimitives.ItemText>
      <SelectPrimitives.ItemIndicator className='SelectItemIndicator'>
        <CheckIcon />
      </SelectPrimitives.ItemIndicator>
    </SelectPrimitives.Item>
  );
});
SelectItem.displayName = SelectPrimitives.Item.displayName;

const SelectTrigger = forwardRef<
  React.ElementRef<typeof SelectPrimitives.Trigger>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Trigger>
>(({ className, children, ...props }, ref) => (
  <SelectPrimitives.Trigger
    ref={ref}
    className={classNames("SelectTrigger", className)}
    {...props}
  >
    {children}
    <SelectPrimitives.Icon asChild>
      <ChevronDownIcon className='SelectIcon' />
    </SelectPrimitives.Icon>
  </SelectPrimitives.Trigger>
));
SelectTrigger.displayName = SelectPrimitives.Trigger.displayName;

const SelectContent = forwardRef<
  React.ElementRef<typeof SelectPrimitives.Content>,
  React.ComponentPropsWithoutRef<typeof SelectPrimitives.Content>
>(({ className, children, position = "popper", ...props }, ref) => (
  <SelectPrimitives.Portal>
    <SelectPrimitives.Content
      ref={ref}
      className={classNames("SelectContent", className)}
      position={position}
      {...props}
    >
      <SelectPrimitives.Viewport className='SelectViewport '>
        {children}
      </SelectPrimitives.Viewport>
    </SelectPrimitives.Content>
  </SelectPrimitives.Portal>
));
SelectContent.displayName = SelectPrimitives.Content.displayName;

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectItem,
  SelectTrigger,
  SelectContent,
};
