// tslint:disable
/**
 * Yugabyte Cloud
 * YugabyteDB as a Service
 *
 * The version of the OpenAPI document: v1
 * Contact: support@yugabyte.com
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


// eslint-disable-next-line no-duplicate-imports
import type { CloudInfo } from './CloudInfo';
// eslint-disable-next-line no-duplicate-imports
import type { PlatformTypeEnum } from './PlatformTypeEnum';


/**
 * Information about YB Platform
 * @export
 * @interface PlatformData
 */
export interface PlatformData  {
  /**
   * 
   * @type {string}
   * @memberof PlatformData
   */
  hostname?: string;
  /**
   * 
   * @type {CloudInfo}
   * @memberof PlatformData
   */
  cloud_info?: CloudInfo;
  /**
   * A CIDR block
   * @type {string}
   * @memberof PlatformData
   */
  cidr?: string;
  /**
   * 
   * @type {PlatformTypeEnum}
   * @memberof PlatformData
   */
  platform_type?: PlatformTypeEnum;
  /**
   * 
   * @type {string}
   * @memberof PlatformData
   */
  vpc_id?: string;
  /**
   * 
   * @type {string}
   * @memberof PlatformData
   */
  certificate_authority?: string;
  /**
   * 
   * @type {string}
   * @memberof PlatformData
   */
  kube_cluster_endpoint?: string;
  /**
   * 
   * @type {string}
   * @memberof PlatformData
   */
  kube_cluster_name?: string;
}



