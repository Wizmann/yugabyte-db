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
import type { CloudEnum } from './CloudEnum';
// eslint-disable-next-line no-duplicate-imports
import type { KmsSpec } from './KmsSpec';
// eslint-disable-next-line no-duplicate-imports
import type { MigrationBackupKeyspaceInfo } from './MigrationBackupKeyspaceInfo';


/**
 * Backup migration spec
 * @export
 * @interface MigrationRestoreSpec
 */
export interface MigrationRestoreSpec  {
  /**
   * 
   * @type {CloudEnum}
   * @memberof MigrationRestoreSpec
   */
  cloud_type?: CloudEnum;
  /**
   * Credentials of the backup bucket
   * @type {string}
   * @memberof MigrationRestoreSpec
   */
  credentials?: string;
  /**
   * Name of the backup bucket
   * @type {string}
   * @memberof MigrationRestoreSpec
   */
  bucket_name?: string;
  /**
   * Region of the bucket
   * @type {string}
   * @memberof MigrationRestoreSpec
   */
  region?: string;
  /**
   * Number of parallel operations
   * @type {number}
   * @memberof MigrationRestoreSpec
   */
  num_parallel_ops?: number;
  /**
   * List of keyspaces and their location
   * @type {MigrationBackupKeyspaceInfo[]}
   * @memberof MigrationRestoreSpec
   */
  keyspaces_info?: MigrationBackupKeyspaceInfo[];
  /**
   * The UUID of the cluster
   * @type {string}
   * @memberof MigrationRestoreSpec
   */
  cluster_id?: string;
  /**
   * 
   * @type {KmsSpec}
   * @memberof MigrationRestoreSpec
   */
  kms_spec?: KmsSpec;
}



