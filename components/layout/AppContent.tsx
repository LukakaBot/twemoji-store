import React from "react";

export default function AppContent({ children }: React.PropsWithChildren) {
  return <main>{children}</main>;
}