const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const api = express();
api.use(cors());
api.use(bodyParser.urlencoded({ extended: false }));
api.use(bodyParser.json());

// ======================= Importação dos controllers =======================//

require('./Controllers/livros')(api);
require('./Controllers/posts')(api);
require('./Controllers/users')(api);
require('./Controllers/donation')(api);

// =========================================================================//

const porta = 3001;
api.listen(porta, () => {
    console.log(`Api está rodando na porta ${porta}`);
})