import { defineConfig } from "vitest/config";

export default defineConfig({
    test: {
        projects: [
            'packages/*',
            'tests/*/vitest.config.{e2e,unit}.ts',
            {
                test: {
                         name: 'happy-dom',
                         root: './shared_tests',
                        environment: 'happy-dom',
                         setupFiles: ['./setup.happy-dom.ts'],
                }
            }

        ]
    }
})