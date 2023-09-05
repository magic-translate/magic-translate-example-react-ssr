import { PropsWithChildren } from "react";

export const GetStarted: React.FunctionComponent<PropsWithChildren> = ({
  children,
}) => (
  <div>
    <div className="inline-block">
      <p className="text-sm justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 p-4 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit rounded-xl border">
        {children}
      </p>
    </div>
  </div>
);
