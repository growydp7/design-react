import * as React from 'react';

export type SizeType = 'small' | 'middle' | 'large' | undefined;

// createContext
// https://zh-hans.reactjs.org/docs/context.html#reactcreatecontext
const SizeContext = React.createContext<SizeType>(undefined);

export default SizeContext;