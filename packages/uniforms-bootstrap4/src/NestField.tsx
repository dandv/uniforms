import classnames from 'classnames';
import React, { HTMLProps } from 'react';
import { Override, connectField, filterDOMProps } from 'uniforms';

import AutoField from './AutoField';

export type NestFieldProps = Override<
  HTMLProps<HTMLDivElement>,
  {
    error?: boolean;
    errorMessage?: string;
    fields?: any[];
    itemProps?: object;
    name: string;
    showInlineError?: boolean;
  }
>;

function Nest({
  children,
  className,
  error,
  errorMessage,
  fields,
  itemProps,
  label,
  name,
  showInlineError,
  ...props
}: NestFieldProps) {
  return (
    <div
      className={classnames(className, { 'has-error': error })}
      {...filterDOMProps(props)}
    >
      {label && <label>{label}</label>}

      {!!(error && showInlineError) && (
        <span className="text-danger">{errorMessage}</span>
      )}

      {children ||
        fields?.map(field => (
          <AutoField key={field} name={field} {...itemProps} />
        ))}
    </div>
  );
}

export default connectField(Nest);
