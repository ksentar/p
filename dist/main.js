"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
const admin = require("firebase-admin");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    if (!admin.apps.length) {
        admin.initializeApp({
            projectId: 'fir-bab30',
            databaseURL: 'http://localhost:8090',
        });
    }
    console.log(admin.SDK_VERSION, 'app');
}
bootstrap();
//# sourceMappingURL=main.js.map