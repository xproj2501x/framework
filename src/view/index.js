/**
 * Framework - View Manager
 * ===
 *
 * @module viewManager
 */

////////////////////////////////////////////////////////////////////////////////
// Imports
////////////////////////////////////////////////////////////////////////////////
import LogService from '../services/log';
import AjaxService from '../services/ajax';

////////////////////////////////////////////////////////////////////////////////
// Definitions
////////////////////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////////////////////
// Class
////////////////////////////////////////////////////////////////////////////////
/**
 * View
 * @class
 * @memberof module:views
 */
class ViewManager {

  //////////////////////////////////////////////////////////////////////////////
  // Private Properties
  //////////////////////////////////////////////////////////////////////////////
  /**
   * @private
   * @type { module:logService.LogService }
   */
  _logService;

  /**
   * @private
   * @type { module:services.AjaxService }
   */
  _ajaxService;

  _templates;

  //////////////////////////////////////////////////////////////////////////////
  // Public Properties
  //////////////////////////////////////////////////////////////////////////////

  constructor() {
    this._logService = LogService.create(this.constructor.name);
    this._ajaxService = AjaxService.create();
    this._templates = {};
  }

  //////////////////////////////////////////////////////////////////////////////
  // Public Methods
  //////////////////////////////////////////////////////////////////////////////
  createView(options) {
    return this._ajaxService.get(options)
      .then((response) => {
        return response;
      }).catch((err) => {
        console.log(err);
      });

  }

  //////////////////////////////////////////////////////////////////////////////
  // Private Methods
  //////////////////////////////////////////////////////////////////////////////
  _loadTemplate() {

  }
  //////////////////////////////////////////////////////////////////////////////
  // Static Methods
  //////////////////////////////////////////////////////////////////////////////
  /**
   * Static factory method
   * @returns { module:views.ViewManager }
   */
  static create() {
    return new ViewManager();
  }
}

////////////////////////////////////////////////////////////////////////////////
// Exports
////////////////////////////////////////////////////////////////////////////////
export default ViewManager;
