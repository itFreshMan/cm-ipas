package com.unteck.cps.web.family.controller;

import javax.servlet.http.HttpServletRequest;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.unteck.cps.web.family.service.CpsFamilyPjjgService;
import com.untech.ipas.web.util.ListHasMapForm;
import com.unteck.cps.web.family.model.CpsFamilyPjjg;
import com.untech.ipas.web.enhance.QueryFilter;
import com.unteck.common.dao.support.Pagination;
import com.unteck.tpc.framework.core.util.ResponseData;
import com.unteck.tpc.framework.web.controller.BaseController;

/**
 * CPS_FAMILY_PJJG Controller
 * @author            
 * @since             2014-10-09
 */
@Controller
@RequestMapping(value="/family/CpsFamilyPjjg")
public class CpsFamilyPjjgController extends BaseController
{
    @Autowired
    private CpsFamilyPjjgService service;
    
    @RequestMapping(value = "/index")
    public String index(){
        return "/cps-gz/family/CpsFamilyPjjg";
    }
    
    @RequestMapping(value = "/pager")
    @ResponseBody
    public Pagination<CpsFamilyPjjg> pager(HttpServletRequest request){
        QueryFilter filter = new QueryFilter(request);
        return service.findPage(filter);
    }
    
    @RequestMapping(value="/save")
    @ResponseBody
    public ResponseData save(CpsFamilyPjjg entity)
    {
		if (service.getEntity(entity.getPjjgId()) != null) {
           return new ResponseData(false, "记录已存在");
       }	
      service.insertEntity(entity);
      return ResponseData.SUCCESS_NO_DATA;
    }
    
    @RequestMapping(value="/update")
    @ResponseBody
    public ResponseData update(CpsFamilyPjjg entity)
    {
      CpsFamilyPjjg oldEntity = (CpsFamilyPjjg)service.getEntity(entity.getPjjgId());
      if (oldEntity == null) {
          return new ResponseData(false, "记录不存在");
      }
      oldEntity.setFamilyId(entity.getFamilyId());
      oldEntity.setHynl(entity.getHynl());
      oldEntity.setHynlDf(entity.getHynlDf());
      oldEntity.setWhcd(entity.getWhcd());
      oldEntity.setWhcdDf(entity.getWhcdDf());
      oldEntity.setHyzk(entity.getHyzk());
      oldEntity.setHyzkDf(entity.getHyzkDf());
      oldEntity.setZfjg(entity.getZfjg());
      oldEntity.setZfjgDf(entity.getZfjgDf());
      oldEntity.setJtcysfjk(entity.getJtcysfjk());
      oldEntity.setJtcysfjkDf(entity.getJtcysfjkDf());
      oldEntity.setJthmqk(entity.getJthmqk());
      oldEntity.setJthmqkDf(entity.getJthmqkDf());
      oldEntity.setLlhmqk(entity.getLlhmqk());
      oldEntity.setLlhmqkDf(entity.getLlhmqkDf());
      oldEntity.setJtsrfzb(entity.getJtsrfzb());
      oldEntity.setJtsrfzbDf(entity.getJtsrfzbDf());
      oldEntity.setJtsrqk(entity.getJtsrqk());
      oldEntity.setJtsrqkDf(entity.getJtsrqkDf());
      oldEntity.setJtzcqk(entity.getJtzcqk());
      oldEntity.setJtzcqkDf(entity.getJtzcqkDf());
      oldEntity.setJtjsr(entity.getJtjsr());
      oldEntity.setJtjsrDf(entity.getJtjsrDf());
      oldEntity.setCjbxqk(entity.getCjbxqk());
      oldEntity.setCjbxqkDf(entity.getCjbxqkDf());
      oldEntity.setCjjnpxqk(entity.getCjjnpxqk());
      oldEntity.setCjjnpxqkDf(entity.getCjjnpxqkDf());
      oldEntity.setZyzqk(entity.getZyzqk());
      oldEntity.setZyzqkDf(entity.getZyzqkDf());
      oldEntity.setNyye(entity.getNyye());
      oldEntity.setNyyeDf(entity.getNyyeDf());
      oldEntity.setScjynl(entity.getScjynl());
      oldEntity.setScjynlDf(entity.getScjynlDf());
      oldEntity.setScjyqj(entity.getScjyqj());
      oldEntity.setScjyqjDf(entity.getScjyqjDf());
      oldEntity.setDkls(entity.getDkls());
      oldEntity.setDklsDf(entity.getDklsDf());
      oldEntity.setBlxyjl(entity.getBlxyjl());
      oldEntity.setBlxyjlDf(entity.getBlxyjlDf());
      oldEntity.setDkzyxs(entity.getDkzyxs());
      oldEntity.setDkzyxsDf(entity.getDkzyxsDf());
      oldEntity.setNfaxfx(entity.getNfaxfx());
      oldEntity.setNfaxfxDf(entity.getNfaxfxDf());
      oldEntity.setCjzyhzzzqk(entity.getCjzyhzzzqk());
      oldEntity.setCjzyhzzzqkDf(entity.getCjzyhzzzqkDf());
      oldEntity.setCjmjzzqk(entity.getCjmjzzqk());
      oldEntity.setCjmjzzqkDf(entity.getCjmjzzqkDf());
      oldEntity.setHdbzqk(entity.getHdbzqk());
      oldEntity.setHdbzqkDf(entity.getHdbzqkDf());
      oldEntity.setWfzaglqk(entity.getWfzaglqk());
      oldEntity.setWfzaglqkDf(entity.getWfzaglqkDf());
      oldEntity.setDdcwhpj(entity.getDdcwhpj());
      oldEntity.setDdcwhpjDf(entity.getDdcwhpjDf());
      oldEntity.setDdxyhj(entity.getDdxyhj());
      oldEntity.setDdxyhjDf(entity.getDdxyhjDf());
      oldEntity.setYwfzxw(entity.getYwfzxw());
      oldEntity.setYwfzxwDf(entity.getYwfzxwDf());
      oldEntity.setRemark(entity.getRemark());
      oldEntity.setCreateUser(entity.getCreateUser());
      oldEntity.setCreateTime(entity.getCreateTime());
      oldEntity.setUpdateUser(entity.getUpdateUser());
      oldEntity.setUpdateTime(entity.getUpdateTime());
      service.updateEntity(oldEntity);
      return ResponseData.SUCCESS_NO_DATA;
    }
	@RequestMapping(value="/delete")
    @ResponseBody
    public ResponseData delete(Long[] ids)
    {
      for (Long id : ids)
      {
        service.deleteEntity(id);
      }
      return ResponseData.SUCCESS_NO_DATA;
    }
    
    
}

