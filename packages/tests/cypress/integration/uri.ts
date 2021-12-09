import { buildUrl, extractUrlVariables } from '@legalthingy/shared/utils';
import { UriConfig } from '@legalthingy/shared/schemas/rules';

describe('Test if url building works', () => {
	it('Testing URL with path and query variables', () => {
		const config: UriConfig = {
			base: 'http://text.com',
			pathComponents: [
				{ value: 'static', static: true },
				{ value: 'var1', static: false },
			],
			queryComponents: {
				static: { value: 'x', static: true },
				dynamic: { value: 'var2', static: false },
				empty: { value: 'var3', static: false },
			},
		};
		const output = buildUrl({ var1: '1', var2: '2 3' }, config);
		expect(output).to.eq(
			'http://text.com/static/1?static=x&dynamic=2%203',
		);
	});
});

describe('Test if extracting variables from URL worls', () => {
	it('Testing URL with path and query variables', () => {
		const config: UriConfig = {
			base: 'http://text.com',
			pathComponents: [
				{ value: 'static', static: true },
				{ value: 'var1', static: false },
			],
			queryComponents: {
				static: { value: 'x', static: true },
				dynamic: { value: 'var2', static: false },
				empty: { value: 'var3', static: false },
			},
		};
		const url = 'http://text.com/static/1?static=x&var2=2%203';
		const output = extractUrlVariables(url, config);
		expect(output).to.eql({ var1: '1', var2: '2 3' });
	});
});
