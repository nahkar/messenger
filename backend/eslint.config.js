import js from '@eslint/js';
import tseslint from 'typescript-eslint';
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default tseslint.config(
	// 1. Глобальные игноры
	{
		ignores: ['out/**', 'build/**', 'dist/**', 'node_modules/**'],
	},

	// 2. Базовые правила JS и TypeScript
	js.configs.recommended,
	...tseslint.configs.recommended,

	// 3. Интеграция с Prettier
	eslintPluginPrettierRecommended,

	// 4. Тонкая настройка для ваших TypeScript файлов
	{
		files: ['**/*.ts', '**/*.tsx'],
		languageOptions: {
			parser: tseslint.parser,
			parserOptions: {
				project: './tsconfig.json',
				tsconfigRootDir: import.meta.dirname,
			},
		},
		// Регистрируем плагин вручную, чтобы исправить ошибку из лога
		plugins: {
			'@typescript-eslint': tseslint.plugin,
		},
		rules: {
			'@typescript-eslint/no-explicit-any': 'warn',
			'no-console': 'off',
		},
	}
);
