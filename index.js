import app from './app';

app.listen(app.get('port'), () => {
  console.log(`Rodando na porta ${app.get('port')}`);
});
