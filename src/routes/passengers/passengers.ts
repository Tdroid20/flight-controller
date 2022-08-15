const router = require('express').Router();

/*
=============================// GET //==============================
*/

router.get('/list', async (req: any, res: any) => {
    res.json({ msg: 'List De passageiros indisponivel'})
})

router.get('/list/findOneByID=:id', async (req: { params: any; }, res: any) => {
    const params = req.params;
    
    res.json({ msg: `Passageiro numero ${params.id} não encontrado` })
})

/*
=============================// POST //==============================
*/

router.post('/register', (req: any, res: any) => {
    const data= req.body[0];
    console.log(data)

    res.send(`Não consegui adicionar o(a) ${data.name} de ${data.age} anos idade pois ainda não tenho uma database criada. Tente novamente em breve.`)
});

/*
=============================// PUT //==============================
*/

router.put('/edit/findOneByID=:id', (req: any, res: any) => {
    const data= req.params;
    console.log(data)

    res.send(`Não consegui editar o passageiro ${data.id} pois ainda não tenho uma database criada. Tente novamente em breve.`)
});

/*
=============================// DELETE //==============================
*/

router.delete('/delete/findOneByID=:id', (req: any, res: any) => {
    const data= req.params;
    console.log(data)

    res.send(`Não consegui deletar o passageiro ${data.id} pois ainda não tenho uma database criada. Tente novamente em breve.`)
});

export default router;