/**
 * Template Literal
 */

type CodeFactory = "Code Factory";

// Uppercase
type CodeFacoryUpper = Uppercase<CodeFactory>;

// Lowercase
type CodeFacoryLower = Lowercase<CodeFacoryUpper>;

// Capitalize
type CodeFacoryCapitalize = Capitalize<CodeFacoryLower>;

// Uncapitalize
type codeFactoryUncapitalize = Uncapitalize<CodeFacoryCapitalize>;
