/**
 * Created by Amit Mudgal (Senior Principal Consultant) 
 * Date : 5/18/2017
 * 
 *
 * Copyright © 2017 MicroStrategy Incorporated. All Rights Reserved.
 *
* MICROSTRATEGY MAKES NO REPRESENTATIONS OR WARRANTIES ABOUT THE 
 * SUITABILITY OF THIS SAMPLE CODE, EITHER EXPRESS OR IMPLIED, INCLUDING 
 * BUT NOT LIMITED TO THE IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS 
 * FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT. MICROSTRATEGY SHALL NOT 
 * BE LIABLE FOR ANY DAMAGES SUFFERED BY LICENSEE AS A RESULT OF USING, 
 * MODIFYING OR DISTRIBUTING THIS SAMPLE CODE OR ITS DERIVATIVES.
 *
 *
 */


package com.coke;

import java.util.ResourceBundle;

import com.microstrategy.web.app.addons.AbstractAppAddOn;
import com.microstrategy.web.app.beans.PageComponent;
import com.microstrategy.web.beans.PromptsBean;
import com.microstrategy.web.beans.RWBean;
import com.microstrategy.web.beans.WebBeanException;
import com.microstrategy.web.objects.WebDocumentInstance;
import com.microstrategy.web.objects.WebObjectsException;
import com.microstrategy.web.objects.WebPrompt;
import com.microstrategy.web.objects.WebPrompts;
import com.microstrategy.web.objects.rw.RWInstance;


public class ApplyFilterCriteria extends AbstractAppAddOn { 

    
    public String getAddOnDescription() {
        return "";
    }
    private static final String PROPERTIES_FILE_NAME = "resources/configuration";
    private static final String PROMPT_ID = "PROMPT_ID";
    
    public void preCollectData(PageComponent page) {

    	System.out.println("Inside PreCollect");
    	RWBean rwb = (RWBean) page.getChildByClass(RWBean.class);
    	
    	try {
    		RWInstance rwbi = rwb.getRWInstance();
			if(rwbi.isPrompted()){
			  PromptsBean pbs = rwb.getPromptsBean();
			  WebPrompts prompts = pbs.getPrompts();
			  //System.out.println("prompt size: " +prompts.size());
			  ResourceBundle props = ResourceBundle.getBundle(PROPERTIES_FILE_NAME);
			  String PromptGUID = (String) props.getObject(PROMPT_ID);
			  for(int i=0;i<prompts.size();i++){
				  WebPrompt prompt = prompts.get(i);
                  if(PromptGUID.equalsIgnoreCase(prompt.getID())){
                	  System.out.println("Positive Hit");
                  }
			  }
			}
		} catch (WebObjectsException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (WebBeanException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
    	super.preCollectData(page);
    }

   

}