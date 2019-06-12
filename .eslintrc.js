module.exports = {
	extends: "airbnb",
	env: {
		browser: true,
		es6: true
	},
	settings: {
		'import/resolver': {
			webpack: {
				config: "webpack.common.js"
			},
			node: {
				paths: ["src"]
			}
		}
	},
	rules: {
		indent: ["error", 2, {
			SwitchCase: 1,
		}],
		'max-len': ["error", {
			code: 120,
			ignoreComments: true,
			ignoreUrls: true,
			ignoreStrings: true,
			ignoreTemplateLiterals: true
		}],
		'arrow-parens': 0,
		'comma-dangle': 0,
		'react/prefer-stateless-function': 0,
		'prefer-template': 0,
		'react/jsx-filename-extension': [1, {
			extensions: [".js", ".jsx"],
		}],
		'no-underscore-dangle': 0,
		'no-plusplus': ["error", {
			allowForLoopAfterthoughts: true,
		}],
		'import/no-extraneous-dependencies': ["error", {
			devDependencies: true,
		}],
		'no-return-assign': 0,
		'react/destructuring-assignment': 0,
		'react/jsx-one-expression-per-line': 0,
		'object-curly-newline': 0,
		'jsx-a11y/click-events-have-key-events': 0,
		'jsx-a11y/no-noninteractive-element-interactions': 0,
		'jsx-a11y/anchor-is-valid': 0
	}
};
