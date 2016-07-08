import React from 'react';
import classNames from 'classnames';
import AppWrapper from './../app-wrapper';

/**
 * Renders a full width application bar.
 */
class NavigationBar extends React.Component {
  static propTypes = {
    /**
     * Determines the style of the component eg. primary/secondary
     *
     * @property as
     * @type {String}
     * @default primary
     */
    as: React.PropTypes.string
  }

  static defaultProps = {
    as: "primary"
  }

  /**
   * Returns the classes for the component.
   *
   * @method classes
   * @return {String}
   */
  get classes() {
    return classNames(
      "ui-navigation-bar",
      this.props.className,
      `ui-navigation-bar--${this.props.as}`
    );
  }

  /**
   * @method render
   */
  render() {
    return (
      <div className={ this.classes }>
        <AppWrapper className="ui-navigation-bar__content">
          { this.props.children }
        </AppWrapper>
      </div>
    );
  }
}

export default NavigationBar;