// Global Components
import * as React from 'react';
import type {
  Location,
} from 'history';
import type {
  match,
  RouteComponentProps,
} from 'react-router';

export type $Component<P> = React.ReactElement<
React.PropsWithChildren<P>
>;
export type $Children = React.ReactNode;

export type $Location = Location;
export type $Match = match;
export type $WebRouter = RouteComponentProps;
export type $Translate = {
  t: (arg0: string) => string,
};
