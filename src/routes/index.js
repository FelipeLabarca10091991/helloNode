import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => { res.render('index', { miTitulo: 'Home @falaca' }) });
router.get('/about', (req, res) => { res.render('about', { miTitulo: 'About me' }) });
router.get('/contact', (req, res) => { res.render('contact', { miTitulo: 'Contact me ' }) });


export default router



