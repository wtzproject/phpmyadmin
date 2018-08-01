/**
 * List of JS files need to be loaded at the time of initial page load.
 * Eg. For server_privileges.php, server_privileges.js is required
 */

/**
 * @type {Object} files
 */
const files = {
    global: ['error_report', 'navigation'],
    server_privileges: ['server_privileges'],
    server_databases: ['server_databases'],
    server_status_advisor: ['server_status_advisor'],
    server_status_processes: ['server_status_processes'],
    server_status_variables: ['server_status_variables'],
    user_password: ['server_privileges'],
    server_plugins: ['server_plugins'],
    server_status_queries: ['server_status_sorter', 'server_status_queries'],
    server_status_monitor: ['server_status_monitor', 'server_status_sorter'],
    server_variables: ['server_variables'],
    server_user_groups: ['server_user_groups'],
    server_replication: ['server_privileges', 'replication'],
    server_export: ['export'],
    server_import: ['import']
};

export default files;