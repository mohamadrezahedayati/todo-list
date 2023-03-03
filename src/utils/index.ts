export function getId (prefix = 'id') {
    return `${prefix}${Date.now().toString(36) + Math.random().toString(36).substr(2)}`;
}