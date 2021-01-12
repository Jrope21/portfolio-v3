
// pass a semi unique prop for "pre"
// TODO -- create better function if issues arise
export const generateKey = (pre) => {
    return `${ pre }_${ new Date().getTime() }`;
}