package com.unteck.cps.web.family.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.unteck.cps.web.family.dao.CpsFamilyPjjgDao;
import com.unteck.cps.web.family.model.CpsFamilyPjjg;

import com.untech.ipas.web.enhance.BaseDao;
import com.untech.ipas.web.enhance.BaseService;

/**
 * CPS_FAMILY_PJJG Service
 *
 * @author            
 * @since             2014-10-09
 */

@Service
public class CpsFamilyPjjgService
      extends BaseService<CpsFamilyPjjg, Long>
    {
      @Autowired
      private CpsFamilyPjjgDao dao;
      
      public BaseDao<CpsFamilyPjjg, Long> getHibernateBaseDao()
      {
        return this.dao;
      }
}

