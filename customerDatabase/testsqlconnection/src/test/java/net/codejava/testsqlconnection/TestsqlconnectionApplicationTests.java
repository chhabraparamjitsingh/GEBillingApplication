package net.codejava.testsqlconnection;



import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
/*import static org.junit.jupiter.api.Assertions.assertNotEquals;
import org.springframework.test.web.servlet.MockMvc;
import org.junit.Assert.*;
import org.junit.matchers.JUnitMatchers.*;
*/
@SpringBootTest
@AutoConfigureMockMvc
class TestsqlconnectionApplicationTests {

	//@Autowired
	//private MockMvc mockMvc;

	@Autowired
	//private MvcController mvcController;

	@Test
	void contextLoads() {
	//	assertThat(mvcController, isNotNull());
	}

	/*@Test
	void testHello(){
		mockMvc.perform (getClass("/hello"))
			.andDo(print())
			.andExpect(status)
		(get("/hello"))
			.andDo(print())
			.andExpect(status().isOk());
	}*/
}
