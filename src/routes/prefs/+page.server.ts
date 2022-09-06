import { invalid, redirect, type RequestEvent } from '@sveltejs/kit';
import type { PrefsFormData } from './shared';


export const actions = {
	default: async (
		event: RequestEvent
	): Promise<{
		status: number;
		data: {
			data: PrefsFormData;
			errors: { [k in keyof PrefsFormData]?: string };
		};
	}> => {
		const fd = await event.request.formData();
		const data: PrefsFormData = {
			color: (fd.get('color') || '').toString().trim()
		};
		if (data.color.length === 0) {
			return invalid(400, { data, errors: { color: 'Required.' } });
		}
		if (data.color.toLowerCase().indexOf('kapoor black') > -1) {
			return invalid(400, {
				data,
				errors: { color: 'You are forbidden to have Kapoor Black as your favorite color.' }
			});
		}
		throw redirect(303, '/');
	}
};
