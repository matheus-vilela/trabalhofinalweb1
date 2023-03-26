import votacao from 'app/controllers/vote';


import { Router } from 'express';

const router = Router();

router.get('/votacao', votacao.index);
router.get('/votacao/:id', votacao.show);
router.post('/votacao', votacao.create);
router.post('/votacao/:id', votacao.vote);
router.put('/votacao/:id', votacao.update);
router.delete('/votacao/:id', votacao.delete);


export default router;
