// src/lib/stores/auth.svelte.ts
import { browser } from '$app/environment';

// Define the shape of your user data
interface User {
	id: string;
	email: string;
	name?: string;
	// Add other custom user properties here
}

class AuthState {
	// 1. Private state runes
	#user = $state<User | null>(null);
	#token = $state<string | null>(null);
	#isInitialized = $state(false);

	constructor() {
		// Load existing session from localStorage if in the browser
		if (browser) {
			this.#token = localStorage.getItem('auth_token');
			const savedUser = localStorage.getItem('auth_user');
			if (savedUser) {
				try {
					this.#user = JSON.parse(savedUser);
				} catch (e) {
					this.logout(); // Clear corrupted data
				}
			}
			this.#isInitialized = true;
		}
	}

	// 2. Public derived getters
	get user() {
		return this.#user;
	}

	get token() {
		return this.#token;
	}

	get isAuthenticated() {
		return !!this.#token && !!this.#user;
	}

	get isInitialized() {
		return this.#isInitialized;
	}

	// 3. Actions to update state
	login(token: string, userData: User) {
		this.#token = token;
		this.#user = userData;

		if (browser) {
			localStorage.setItem('auth_token', token);
			localStorage.setItem('auth_user', JSON.stringify(userData));
		}
	}

	logout() {
		this.#token = null;
		this.#user = null;

		if (browser) {
			localStorage.removeItem('auth_token');
			localStorage.removeItem('auth_user');
		}
	}
}

// Export a single, global instance of the class
export const authState = new AuthState();
