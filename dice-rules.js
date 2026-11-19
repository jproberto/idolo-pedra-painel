/* Regras de rolagem — Ordem Paranormal RPG 2 Playtest Alpha v1.1
 * Base: páginas 18–20. A seleção de quais dados somar é manual:
 * o texto limita a soma a três, mas não define uma escolha automática.
 */
window.DiceRules={
 types:[4,6,8,10,12,20],maxRolled:4,maxKept:3,defaultDT:7,
 roll(sides){return Math.floor(Math.random()*sides)+1},
 evaluate(values,kept,dt){
  const critical=values.some(v=>values.filter(x=>x===v).length>=2&&v>=6);
  const fumble=values.every(v=>v===1),sum=kept.reduce((a,i)=>a+values[i],0);
  return {sum,high:Math.max(...values),low:Math.min(...values),critical,fumble,success:fumble?false:critical?true:sum>=dt,margin:sum-dt};
 },
 criticalFailureEffects:['Vexame','Machucado: Físico diminui 1 passo até o fim da cena','Desatenção: Mente diminui 1 passo até o fim da cena','Irritação: Emoção diminui 1 passo até o fim da cena','Acidente: perde d4 PV','Frustração: perde d4 PD','Perda: perde um item carregado ou um espaço de compra disponível','Nenhum efeito adicional']
};