"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    var app = await core_1.NestFactory.create(app_module_1.AppModule);
    const options = {
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        preflightContinue: false,
        optionsSuccessStatus: 204,
        credentials: true,
        allowedHeaders: 'Content-Type, Accept',
    };
    app.enableCors(options);
    await app.listen(3000);
}
bootstrap();
//# sourceMappingURL=main.js.map